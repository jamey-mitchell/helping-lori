import React from "react";

export interface LayoutProps {
    items: Item[]
}

export interface Item {
    name: string
}

export default class Layout extends React.Component<LayoutProps> {
    render(): JSX.Element {
        return (
            <div>
                {this.props.items.map((item, index) => (
                    <div key={index}>
                        {item.name}
                    </div>
                ))}
            </div>
        );
    }
}