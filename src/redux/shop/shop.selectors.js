import memoize from 'lodash.memoize'
import { createSelector } from 'reselect'

const shopSelector = state => state.shop

export const collectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
)

export const collectionsForPreviewSelector = createSelector(
  [collectionsSelector],
  collections => Object.values(collections)
)

export const collectionSelector = memoize(collectionUrlParam =>
  createSelector(
    [collectionsSelector],
    collections => collections[collectionUrlParam]
  )
)
