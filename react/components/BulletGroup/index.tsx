import React, { PropsWithChildren } from 'react'
import { useListContext } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'


export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []

  console.log("Bullets", bullets)

  const bulletsGroup = getBulletsAsTSXList(bullets);

  if (false){
    console.log(list, children)
  }

  return (
    isMobile
    ?
      <div>estamos en mobile</div>
    :
      <div>{bulletsGroup}</div>
  )
}

export default BulletGroup
