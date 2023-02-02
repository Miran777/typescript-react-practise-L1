import React, {FC, useRef, useState} from 'react'

export const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)

    } 

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragWithPreventHanlder = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('Drop')
    }
    

  return (
    <div>
        <input value={value} onChange={changeHandler} type='input' placeholder='Управляемый'/>
        <input ref={inputRef} type='input' placeholder='Неуправляемый'/>
        <button onClick={clickHandler}>click</button>
        <div onDrag={dragHandler} style={{width: '200px', height: '200px', background: 'red'}}></div>
        <div 
            draggable
            onDrop={dropHandler} 
            onDragLeave={leaveHandler} 
            onDragOver={dragWithPreventHanlder}
            style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: '15px'}}></div>
    </div>
  )
}
