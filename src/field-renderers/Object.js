import styles from './styles/Object.css'

import React, {PropTypes} from 'react'
import Fieldset from '../Fieldset.js'

export default function ObjectFieldRenderer(props) {
  const {input, field} = props
  return (
    <Fieldset className={styles.root} legend={field.title || 'No legend is set'}>
      <div className={styles.inner}>
        {input}
      </div>
    </Fieldset>
  )
}

ObjectFieldRenderer.propTypes = {
  input: PropTypes.node,
  fieldName: PropTypes.string,
  field: PropTypes.shape({
    title: PropTypes.string
  })
}
