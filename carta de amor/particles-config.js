particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#d9a8ff', // Tonos violetas claros
        },
        shape: {
            type: 'circle', // Cambia a 'star' si quieres estrellas
            stroke: {
                width: 0,
                color: '#000000',
            },
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
            },
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 0.5,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#c08fff',
            opacity: 0.6,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 10,
                duration: 2,
                opacity: 0.8,
            },
            repulse: {
                distance: 200,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});
