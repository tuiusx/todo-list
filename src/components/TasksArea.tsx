import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

import styles from './TasksAreas.module.css'

export function TasksArea() {
    return (
        <>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                />
                <button className="styles.button" type="submit">
                    Criar
					<PlusCircle size={16} weight='bold' />
                </button>

            </form>
        </>
    )
}