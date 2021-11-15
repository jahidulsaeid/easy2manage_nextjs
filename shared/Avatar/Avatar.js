import { avatarColors } from "contains/contants";
import React, { FC } from "react";
import avatar1 from "../../images/avatars/Image-1.png";

const Avatar = () => {

    const containerClassName = "ring-1 ring-white dark:ring-neutral-900",
    const sizeClass = "h-6 w-6 text-sm",
    const radius = "rounded-full",
    const imgUrl = avatar1,
    const userName,
    const hasChecked,
    const hasCheckedClass = "w-4 h-4 -top-0.5 -right-0.5";

    const url = imgUrl || "";
    const name = userName || "John Doe";
    const _setBgColor = (name) => {
      const backgroundIndex = Math.floor(
        name.charCodeAt(0) % avatarColors.length
      );
      return avatarColors[backgroundIndex];
    };

    return (
        <div
            className={`wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
            style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
        >
            {url && (
                <img
                    className={`absolute inset-0 w-full h-full object-cover ${radius}`}
                    src={url}
                    alt={name}
                />
            )}
            <span className="wil-avatar__name">{name[0]}</span>

            {hasChecked && (
                <span
                    className={` bg-teal-500 rounded-full text-white text-xs flex items-center justify-center absolute  ${hasCheckedClass}`}
                >
                    <i className="las la-check"></i>
                </span>
            )}
        </div>
    )
}

export default Avatar
