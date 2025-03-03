import React from 'react'
import PropTypes from 'prop-types'
import {Tabs} from '../../ui'
import Tab from '../../ui/tabs/Tab'
import Transactions from './transactions/transactions'

const BudgetContent = () => {
  return (
    <section className='container'>
          <Tabs>
            <Tab title="Data">
              <Transactions />
            </Tab>
            <Tab title="Income">Conddd</Tab>
            <Tab title="Expanses">Content 3</Tab>
          </Tabs>
    </section>
  )
}

BudgetContent.PropTypes = {}

export default BudgetContent