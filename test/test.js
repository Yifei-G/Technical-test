QUnit.test( "getCategoryPath", function( assert ) {
	assert.equal(getCategoryPath(categories, 'category4'), '/category1/category3/category4' );
	assert.equal(getCategoryPath(categories, 'category2'), '/category1/category2' );
	assert.equal(getCategoryPath(categories, 'category5'), '/category5' );
});