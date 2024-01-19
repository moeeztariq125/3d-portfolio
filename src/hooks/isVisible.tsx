import { RefObject, useEffect, useState } from "react";

export const useIntersection = (element:RefObject<HTMLElement | null>, rootMargin:string)=>{
    const [isVisible, setVisible] = useState(false)

    useEffect(()=>{
        const current = element?.current;
        const observer = new IntersectionObserver(
            ([entry])=>{
                setVisible(entry.isIntersecting)
            },{rootMargin}
        )
        current && observer.observe(current)

        return () => {current && observer.unobserve(current)}
    },[])
    return isVisible
}