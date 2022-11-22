import React from 'react'
import { BulletsSchema } from '../BulletTypes'
import Bullet from '../Bullet'



export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => {
  return (
    bullets.map((bullet:any, index) => {
      return <Bullet
        key={index}
        src={bullet.image}
        titleBullet={bullet.titleBullet}
        link={
          bullet.link
          ?
            bullet.link
          :
          {
            url: "string",
            attributeNofollow:false,
            attributeTitle: "",
            openNewTab: false,
            newTab: false
          }
        }
      />
    })
  )
}
