import { Fitrash2, FiPlus } from 'react-icons/fi'

import './list.styles.css'
const List = () => {
    return(
<section className='list'>
<header>
<h2>Tarefas a fazer:</h2>

<div className='input-container'>
    <input 
     type='text'
     placeholder='Adicionar nova tarefa'
     />
     <button className= 'add-task'>
     <FiPlus size= {16} color='#FFFAFA'/>
     </button>
</div>
</header>
</section>
    )
}


export default List