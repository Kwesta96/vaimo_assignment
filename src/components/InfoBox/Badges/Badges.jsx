import React from 'react'
import './badges.scss'
import { ReadyToShip } from '../Badges/ReadyToShip/ReadyToShip'
import { InStock } from '../Badges/InStock/InStock'
import { FastDispatch } from '../Badges/FastDispatch/FastDispatch'

export const Badges = () => {
  return (
    <div className='badges'>
      <ReadyToShip text="Ready to Ship" />
      <InStock text="In Stock" />
      <FastDispatch text="Fast Dispatch" />
    </div>
  )
}
