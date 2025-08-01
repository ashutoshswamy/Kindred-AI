"use client"

import { useEffect, useState } from "react"

export function Copyright() {
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])
    
    return (
        <span>© {year} Kindred AI. All rights reserved.</span>
    )
}
