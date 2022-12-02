import React from "react";

// When we create an interface for the props, it facilitates 
// the creation of the object we want passed in from the parent
export interface LayoutProps {
    items: Item[]
}

export interface Item {
    name: string
}

// The LayoutProps interface is used here in the signature of the class
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