import React, { useEffect, useRef, useState } from "react";
import { useTextField, AriaTextFieldOptions } from '@react-aria/textfield';
import twx from "tailwindcssx";

export interface TextAreaProps extends AriaTextFieldOptions {
    labelPosition?: "top" | "side",
    isQuiet?: boolean,
    hasCharacterCount?: boolean,
    showValidIcon?: boolean,
    isError?: boolean,
    description?: string,
    errorMessage?: string,
    necessityIndicator?: "text" | "icon",
    hideDragIcon?: boolean,
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
    const {
        label, labelPosition = "top", value,
        isQuiet = false, necessityIndicator = 'icon', isRequired = false, hasCharacterCount = false,
        showValidIcon = false, isError = false, isDisabled = false,
        description, errorMessage = "", hideDragIcon = false,
        onChange,
    } = props;

    const [input, setInput] = useState(value || "");
    useEffect(() => {
        setInput(value || "");
    }, [value]);

    const inputRef = useRef(null);
    let { labelProps, inputProps } = useTextField(props, inputRef);

    return (
        <div className={twx([
            'inline-flex',
            !isDisabled && 'text-gray-600',
            isDisabled && 'text-gray-400',
            labelPosition === "top" && "flex-col",
            labelPosition === "side" && "flex-row items-center",
            // 'border border-red-600',
        ])}>
            <label
                {...labelProps}
                className={twx({
                    '': [
                        // 'border border-red-600',
                        'text-xs',
                        'mb-1',
                        'inline-flex',
                        labelPosition === "side" && "justify-center items-center flex-1 w-32"
                    ],
                })}
            >
                <div className="flex-1">
                    <span>
                        {label}
                    </span>
                    <span className="ml-1">
                        {necessityIndicator === 'icon' && isRequired && "*"}
                        {necessityIndicator === 'text' && isRequired && "(required)"}
                        {necessityIndicator === 'text' && !isRequired && "(optional)"}
                    </span>
                </div>
                <div>
                    {hasCharacterCount && input.length}
                </div>
            </label>
            <div className={twx({
                '': [
                    !isDisabled && isQuiet && ["border-b"],
                    !isDisabled && !isQuiet && ["border", 'bg-white'],
                    !isDisabled && !isError && 'border-gray-500',
                    !isDisabled && isError && 'border-red-500',
                    'rounded',
                    'overflow-hidden',
                    'flex',
                    'items-center',
                    'px-2 py-1',
                    isDisabled && ["bg-gray-300"],
                    labelPosition === "side" && "ml-1"
                ],
                hover: [
                    !isError && 'border-gray-600',
                ],
            })}>
                <textarea
                    {...inputProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                    value={input}
                    onChange={(e) => {
                        onChange && onChange(e.target.value);
                        setInput(e.target.value);
                    }}
                    className={twx({
                        '': [
                            !isQuiet && 'bg-white',
                            !isDisabled && 'placeholder-gray-900',
                            'text-sm',
                            isDisabled && ["bg-gray-300", 'placeholder-gray-500'],
                            hideDragIcon && "resize-none",
                        ],
                    })}
                />
                {
                    isError &&
                    <div className={twx([
                        "ml-2",
                        'text-red-500',
                    ])}>
                        <i className="fas fa-exclamation-triangle" />
                    </div>
                }
                {
                    showValidIcon && !isError &&
                    <div className={twx([
                        "ml-2",
                        'text-green-500',
                    ])}>
                        <i className="fas fa-check" />
                    </div>
                }
            </div>
            <div className={twx([
                "mt-1",
                'text-xs',
                isError && "text-red-600",
            ])}>
                {!isError && description}
                {isError && errorMessage}
            </div>
        </div>
    )
};