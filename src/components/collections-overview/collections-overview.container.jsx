import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector.js'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from '../collections-overview/collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewConatainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewConatainer