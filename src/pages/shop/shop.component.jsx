import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOwerviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    usubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.get().then(
            (snapshot => {
                const collectionsMap = convertCollectionSnapshotToMap(snapshot)
                updateCollections(collectionsMap);
                this.setState({ loading: false })
            })
        )

        //fetch method

        // fetch('https://firestore.googleapis.com/v1/projects/e-commerce-website-654b8/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(collections => console.log(collections))
        //https://firestore.googleapis.com/v1/projects/e-commerce-website-654b8/databases/(default)/documents/  


    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOwerviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }

}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)