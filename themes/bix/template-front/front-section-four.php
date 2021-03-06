<section class="home-book"><!--Section 5-->
	<div class="book-logo-wrapper">
		<img class="book-logo" src="<?php echo(get_template_directory_uri());?>/images/bix-logo-black.png" alt="bix logo"/>
		<div class="home-book-text">
			<h2 class="book-title">The Bix Book</h2>
			<h4 class="book-subheading">Transformational Stories</h4>
			<h3>Bix Bickson</h3>
			<p>
				<span>with</span> 
				Annika Martins
			</p>	
		</div>
	</div>
	<div class="book-summary">
		<div>
			<h3 class="bix-book-title">The Bix Book</h3>
				<?php echo CFS()->get( 'bix_book_summary' ); ?>
			<a class="btn-discover" href="<?php echo get_permalink( get_page_by_path( 'bix-book' ) )?>">Discover</a>
		</div>
	</div>
</section>