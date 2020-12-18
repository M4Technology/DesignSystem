import React from "react";
import twx from "tailwindcssx";

export interface ToastProps {
    text: string,
    variant: "neutral" | "informative" | "positive" | "negative",
    actionLabel?: string,
    isAutoDismissible?: boolean,
}

export const Toast: React.FC<ToastProps> = ({ text, variant, actionLabel, isAutoDismissible }) => {
    return (
        <div className={twx([
            'p-0.5',
            'text-white',
            'font-semibold',
            'px-2',
            'rounded',
            'flex',
            'box-border',
            // 'h-16',
            variant === "informative" && "bg-blue-600",
            variant === "negative" && "bg-red-600",
            variant === "neutral" && "bg-gray-600",
            variant === "positive" && "bg-green-600",
        ])}>
            <div className="flex-1 p-3">
                {
                    variant === "neutral" && null
                }
                {
                    variant === "informative" && (
                        <span className="mr-3">
                            <i className="fas fa-info-circle" />
                        </span>
                    )
                }
                {
                    variant === "positive" && (
                        <span className="mr-3">
                            <i className="fas fa-check-circle" />
                        </span>
                    )
                }
                {
                    variant === "negative" && (
                        <span className="mr-3">
                            <i className="fas fa-exclamation-triangle" />
                        </span>
                    )
                }
                {text}
            </div>
            {
                actionLabel && (
                    <div className="flex items-center">
                        <button className={twx({
                            '': [
                                "inline-block py-1 px-3 font-semibold rounded", 
                                "transition-all duration-25"
                            ],
                            hover: [
                                'bg-gray-900',
                                'bg-opacity-25',
                            ]
                        })}>
                            {actionLabel}
                        </button>
                    </div>
                )
            }
            <div className="my-2 mx-3 mr-2 border-l-2 border-gray-200 opacity-25" />
            <div className="flex items-center">
                <button className={twx({
                    '': [
                        "inline-block py-1 px-3 font-semibold text-xl rounded", 
                        "transition-all duration-25"
                    ],
                    hover: [
                        'bg-gray-900',
                        'bg-opacity-25',
                    ]
                })}>
                    &times;
                </button>
            </div>
        </div>
    )
};