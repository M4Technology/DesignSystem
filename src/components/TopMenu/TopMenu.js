import React from "react";
import classNames from 'classnames';

export default function TopMenu({children, leftChildren, rightChildren}) {
    let className = classNames(
        // 'border',
        // 'border-red-600',
        'flex',
        'h-10',
        'border-box'
    );

    return (
        <div className={className}>
            <div className={classNames(

            )}>
                {leftChildren}
            </div>
            <div className={classNames(
                'flex-1'
            )}>
                {children}
            </div>
            <div className={classNames(

            )}>
                {rightChildren}
            </div>
            {children}
        </div>
    );
}