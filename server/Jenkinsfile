pipeline {
    
    environment {
     //environment settings for ECR & ECS deploy scripts//
     //DO NOT MODIFY!//
     AWS_ACCOUNT_ID="447151167969"
     AWS_DEFAULT_REGION="eu-west-2"

     //MODIFY THE FOLLOWING ITEMS WITH THE ALLOCATED STUDENT NUMBER XX e.g. 03//
     CLUSTER_NAME="ec-acad-user-01"
     SERVICE_NAME="ec-acad-ecs-svc-fe01"
     TASK_DEFINITION_NAME="ec-acad-ecs-tsk-fe01"

     //DO NOT MODIFY!//
     DESIRED_COUNT="1"

     //MODIFY THE FOLLOWING ITEMS WITH THE ALLOCATED STUDENT NUMBER XX e.g. 03//
     IMAGE_REPO_NAME="ec-acad-fe-app01"
     
     //DO NOT MODIFY!//
     IMAGE_TAG="${env.BUILD_ID}"
     REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
     registryCredentialDev = 'ec-acad-dev-credentials'
     registryCredentialTest = 'ec-acad-test-credentials'
     registryCredentialProd = 'ec-acad-prod-credentials'
     dockerImage = ''
    }
    
    agent any

    tools {maven "maven-3.8.6"}	
	
    stages {

    // Maven build and Unit Tests
    stage('Build & Unit Tests') {
      steps{
        script {
          sh 'mvn -B clean package'
        }
      }
    }
        // Building Docker image
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build IMAGE_REPO_NAME + ":${env.BUILD_ID}"
        }
      }
    }
	//Push image to AWS ECR   
       stage('Push image to AWS ECR') {
        steps{
            script{
                docker.withRegistry("https://" + REPOSITORY_URI, "ecr:eu-west-2:" + registryCredentialDev) {
                    dockerImage.push()
                }
            }
        }
       }
    // Cleanup
    stage('Image Cleanup') {
      steps{
        script {
	 catchError(buildResult: 'SUCCESS', stageResult: 'SUCCESS') {
	    sh 'echo "cleaning images"'
	    sh 'docker rmi -f $(docker images -a -q)' /* clean up dockerfile images*/
            sh "exit 0"
                }
        }
      }
    }
	   
         //Deploying Image to Dev ECS
     stage('Deploy to Dev') {
     steps{
            withAWS(credentials: registryCredentialDev, region: "${AWS_DEFAULT_REGION}") {
                script {
			sh "chmod +x ./scripts/deploy-script.sh"
			sh './scripts/deploy-script.sh "dev"'
                }
            } 
        }
      } 	   

               //Deploying Image to Test ECS
     stage('Deploy to Test') {
     steps{
            withAWS(credentials: registryCredentialTest, region: "${AWS_DEFAULT_REGION}") {
                script {
			input id: 'Choice', message: 'Deploy image to Test?'
			sh './scripts/deploy-script.sh "test"'
                }
            } 
        }
      } 

     //Deploying Image to Prod ECS
     stage('Deploy to Prod') {
     steps{
            withAWS(credentials: registryCredentialProd, region: "${AWS_DEFAULT_REGION}") {
                script {
			input id: 'Choice', message: 'Deploy image to Prod?'
			sh './scripts/deploy-script.sh "prod"'
                }
            } 
        }
      } 
	  
    }
}
