import React, { useState } from 'react'
import GameBoard from '../GameBoard/GameBoard'
import Rules from '../Rules/Rules'
import GameControls from '../GameControls/GameControls'
import styles from './Dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <GameBoard />

      <Rules />
    </div>
  )
}
export default Dashboard
