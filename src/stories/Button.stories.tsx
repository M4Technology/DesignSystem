import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../components/Button/Button";

export default {
    title: "Design System V2/Button",
} as Meta;

export const Example = () => {
    return (
        <div className="space-y-2">
            <div className="space-x-2">
                <Button variant="callToAction">
                    Hello
                </Button>
                <Button variant="primary">
                    Hello
                </Button>
                <Button variant="secondary">
                    Hello
                </Button>
                <Button variant="negative">
                    Hello
                </Button>
            </div>
            <div className="space-x-2">
                <Button
                    variant="callToAction"
                    icon={<i className="fas fa-share-square" />}
                >
                    Hello
                </Button>
                <Button
                    variant="primary"
                    icon={<i className="fas fa-share-square" />}
                >
                    Hello
                </Button>
                <Button
                    variant="secondary"
                    icon={<i className="fas fa-share-square" />}
                >
                    Hello
                </Button>
                <Button
                    variant="negative"
                    icon={<i className="fas fa-share-square" />}
                >
                    Hello
                </Button>
            </div>
            <div className="space-x-2">
                <Button variant="callToAction" isQuiet>
                    Hello
                </Button>
                <Button variant="primary" isQuiet>
                    Hello
                </Button>
                <Button variant="secondary" isQuiet>
                    Hello
                </Button>
                <Button variant="negative" isQuiet>
                    Hello
                </Button>
            </div>
        </div>
    )
};