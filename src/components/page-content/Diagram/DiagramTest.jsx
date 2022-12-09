import React from 'react';
import {Diagram, DiagramModel, DefaultNodeModel} from '@projectstorm/react-diagrams';

class MyFlowDiagram extends React.Component {
    render() {
        const model = new DiagramModel();

        const node1 = new DefaultNodeModel('Node 1', 'rgb(0, 192, 255)');
        const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');

        node1.setPosition(100, 100);
        node2.setPosition(400, 100);

        model.addAll(node1, node2);

        return (
            <Diagram
            model={model}
            width={500}
            height={500}
            />
        )
    }
}