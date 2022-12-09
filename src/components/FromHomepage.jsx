const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);

    if (mounted.current = true) {
      console.log('Home Page is Mounted')
    } else { console.log('Home Page isnt mounted')}