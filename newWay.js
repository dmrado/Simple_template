import { ClientComponent } from "#"

export const ServerComponent = () => {
  React.useEffect(async () => {
    await fetch(BACKEND_URL + `/goods`)
      .then(res => res.json())
      .then(data => data.items)
      .catch(err => console.log(err))
  }, [])

  return <>
      <ClientComponent props={data.items} />
    </>
}

//-------------------------------------------------------------------------
'use client'
import { GoodsCard } from "#"

export const ClientComponent = props => {
  const [goods, setGoods] = React.useState([])

  setGoods(props)

  return  <>
      {goods.map(good => (
        <GoodsCard props={good} />
      ))}
    </>
}
