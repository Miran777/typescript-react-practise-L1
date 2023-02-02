import React, {FC, useState} from 'react'


export enum CardVariant {
    outlined = 'outlined',
    primary= 'primary'
}


interface CardProps {
    width?: string
    height?: string
    variant: CardVariant
    children: React.ReactNode
    onClick: (num: number) => void
}

export const Card: FC<CardProps> = 
({
    width, 
    height,
    variant,
    onClick,
    children
}) => {
    const [state, setState] = useState(0)
  return (
    <div onClick={() => onClick(state)} style={{width, height, 
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
    }}>
        {children}
    </div>
  )
}

