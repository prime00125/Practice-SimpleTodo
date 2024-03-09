import React, {Component} from 'react' // Add the import for React
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },

  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },

  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredData = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredData})
  }

  render() {
    const {todosList} = this.state
    return (
      <div>
        <h1>Simple Todos</h1>
        <ol>
          {todosList.map(eachTodo => (
            <TodoItem
              todo={eachTodo}
              key={eachTodo.id}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </ol>
      </div>
    )
  }
}

export default SimpleTodos
