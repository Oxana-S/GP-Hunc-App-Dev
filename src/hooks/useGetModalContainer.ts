'use client';

import { useEffect, useState } from "react"

export const useGetModalContainer = () => {
    const [element, set] = useState<HTMLElement | null>(typeof document === 'undefined' ? null : document.getElementById('modalContainer'))

    useEffect(() => {
        set(document.getElementById('modalContainer'))
    }, [])

    return element
}