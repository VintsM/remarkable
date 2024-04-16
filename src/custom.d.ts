declare module '@icons/*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
    export default ReactComponent;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.mp4' {
    const content: string;
    export default content;
}

declare module '*.webm' {
    const content: string;
    export default content;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
