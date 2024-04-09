import React, { useEffect, useRef } from 'react';
import styles from "@/styles/Home.module.css";

const Cursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        const handleMouseMove = (e) => {
            cursorPos.x = e.clientX;
            cursorPos.y = e.clientY;

            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        const loop = () => {
            const easting = 8;
            cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
            cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

            cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [cursorPos, cursorBorderPos]);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor}></div>
            <div ref={cursorBorderRef} className={styles.cursorborder}></div>
        </>
    );
};

export default Cursor;
