import dataStore from '../data/items.json'
import ListItem from '../components/ListItem'

const Store = () => {
  return (
    <div className='max-w-4xl mx-auto '>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataStore.map(item => (
          <ListItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default Store