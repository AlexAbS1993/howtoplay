import styles from '../styles/LoaderInfo.module.css'

export const InfoLoader = () => {
    const id = { "--id": 1 } as React.CSSProperties;
    const id2 = { "--id": 2 } as React.CSSProperties;
    const id3 = { "--id": 3 } as React.CSSProperties;
    return (
        <>
        <span style={id} className={styles.dot}>.</span>
        <span style={id2} className={styles.dot}>.</span>
        <span
        style={id3}
        className={styles.dot}
        >.</span>
        </>
    )
}