import React from "react";

export type MenPropsType = {
    name: string
    age: number
    lessons: { title: string }[]
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: MenPropsType
}

export const Destructuring: React.FC<PropsType> = (props) => {
    const {title, man} = props

  return (
      <div>
          <h1>{title}</h1>
          <hr/>
          <div>{man.name}</div>
      </div>
  )
}