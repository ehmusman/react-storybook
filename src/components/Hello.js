import React from 'react'

const Hello = ({ name }) => {
    return (
        <div>
            Hello! {name}: this is simple Hello component
        </div>
    )
}


export default Hello

export function IsLoading({ condition }) {
    if (condition) {
        return (
            <p> Currently Loading </p>
        )
    }
    return (
        <p> Here’s your content </p>
    )
}
