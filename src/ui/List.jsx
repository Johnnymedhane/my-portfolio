function List({title, item, data, renderItem, children}) {
  return (
    <div className={item}>
     {title && <h2 className={`${item}-title`}>{title}</h2>}
     {data ? (
       <ul className={`${item}-list`}>
         {data.map(renderItem)}
       </ul>
     ) : (
       children
     )}
    </div>
  )
}

export default List


