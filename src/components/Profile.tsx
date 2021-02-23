import style from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/camiladev.png" alt="Camila Matos"/>
            <div>
                <strong>Camila Matos</strong>
                <p>Level 1</p>
            </div>
        </div>

    )
}