import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import style from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={style.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
