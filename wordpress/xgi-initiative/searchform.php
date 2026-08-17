<?php
/**
 * Search form.
 *
 * @package xGI
 */

?>
<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="screen-reader-text" for="xgi-search"><?php esc_html_e( 'Search', 'xgi' ); ?></label>
	<input type="search" id="xgi-search" name="s" value="<?php echo esc_attr( get_search_query() ); ?>" placeholder="<?php esc_attr_e( 'Search the site…', 'xgi' ); ?>">
	<button type="submit" class="btn btn--primary"><?php esc_html_e( 'Search', 'xgi' ); ?></button>
</form>
