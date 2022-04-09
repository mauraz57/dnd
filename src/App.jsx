import { useState, useEffect } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
} from 'react-beautiful-dnd'
import '../styles/App.css'
function App() {
  const [items, setItems] = useState({
    name: 'Kitchen', // drag and drop context
    parent: '',
    areas: [
      // the index in the areas array will tell the column order
      {
        name: 'cleaning', // Column or category, these columns are horizontal, but for me will vertical
        parent: 'Kitchen',
        areas: [
          {
            name: 'Storage', // these elements might be an item or a column at the same time
            parent: 'cleaning',
            areas: [],
          },
          {
            name: 'Washing',
            parent: 'cleaning',
            areas: [],
          },
          {
            name: 'Waste Management',
            parent: 'cleaning',
            areas: [],
          },
        ],
      },
      {
        name: 'Processes',
        parent: 'Kitchen',
        areas: [
          {
            name: 'Grilling',
            parent: 'Processes',
            areas: [],
          },
          {
            name: 'Raw vegetables',
            parent: 'Processes',
            areas: [
              {
                name: 'Fruits',
                parent: 'Raw vegetables',
                areas: [],
              },
              {
                name: 'vegetables',
                parent: 'Raw vegetables',
                areas: [],
              },
              {
                name: 'mushrooms',
                parent: 'Raw vegetables',
                areas: [],
              },
              {
                name: 'Starchy roots',
                parent: 'Raw vegetables',
                areas: [],
              },
            ],
          },
          {
            name: 'Sauces',
            parent: 'Processes',
            areas: [],
          },
        ],
      },
    ],
  })
  let aux = 0
  const [count, setCount] = useState(1)
  useEffect(() => {
    // console.log()
  }, [count])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <h1>D & D app</h1>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {provider => (
            <div
              {...provider.droppableProps}
              ref={provider.innerRef}
            >
              <RecursiveMapping
                element={items}
                counter={aux}
              />
              {provider.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default App

const RecursiveMapping = ({ element, counter }) => {
  console.log(`%cstart ${counter}`, 'color:red')
  if (!!element.areas.length) {
    return (
      <>
        {console.log(`A. ${counter} - ${element.name}`)}
        <Draggable
          draggableId={element.name}
          index={counter}
        >
          {receiver => (
            <div
              {...receiver.draggableProps}
              {...receiver.dragHandleProps}
              ref={receiver.innerRef}
              className="item parent"
              key={element.name}
            >
              {console.log(
                `AA. ${counter} - ${element.name}`
              )}
              <p>{`${counter} - ${element.name}`}</p>
            </div>
          )}
        </Draggable>
        {element.areas.map(e => {
          /* if (!!e.areas.length) {
          }
          counter = counter + 1 */
          return (
            <>
              {console.log(
                `%cloop ${counter} - ${e.name}`,
                'color:darkturquoise'
              )}
              <RecursiveMapping
                key={e.name}
                element={e}
                counter={counter}
              />
            </>
          )
        })}
      </>
    )
  }
  counter = counter + 1
  return (
    <>
      {console.log(`B. ${counter} - ${element.name}`)}
      <Draggable draggableId={element.name} index={counter}>
        {receiver => (
          <div
            {...receiver.draggableProps}
            {...receiver.dragHandleProps}
            ref={receiver.innerRef}
            className="item"
            key={element.name}
          >
            <p>{`${counter} - ${element.name}`}</p>
          </div>
        )}
      </Draggable>
    </>
  )
}

const CustomDraggable = ({
  element,
  counter,
  logger,
  classes,
}) => {
  return (
    <Draggable draggableId={element.name} index={counter}>
      {receiver => (
        <div
          {...receiver.draggableProps}
          {...receiver.dragHandleProps}
          ref={receiver.innerRef}
          className="item parent"
          key={element.name}
        >
          {console.log(`AA. ${counter} - ${element.name}`)}
          <p>{`${counter} - ${element.name}`}</p>
        </div>
      )}
    </Draggable>
  )
}
