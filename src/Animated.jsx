const AnimatedSVG = () => {
    return (
        <div>
            <h2>Animated SVG Example</h2>
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10">
                    <animate
                        attributeName="fill"
                        values="red;yellow;green;blue;red"
                        dur="6s"
                        repeatCount="indefinite"
                    />
                </rect>

            </svg>

        </div>
    );
};

export default AnimatedSVG;
