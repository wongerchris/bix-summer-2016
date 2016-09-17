<?php
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main single-story-site" role="main">

		<div class="single-story-modal-overlay">
			<div class="single-story-modal-container">
				<div class="comment-modal">
					<!-- comment modal code here -->
				</div>
				<div class="highlight-modal">
					<!-- highlight modal code here -->
				</div>
				<div class="download-modal">
					<!-- download book modal code here -->
				</div>
			</div>
		</div>

		<section class="stories-banner">
			<div class="stories-header">
				<img class="site-logo" src="<?php echo(get_template_directory_uri());?>/images/bix-logo.png" alt="bix logo"/>
				<h2 class="stories-title">Teaser</h2>
				<p class="stories-subtitle">Get a taste of the content in The Bix Book with these sample stories</p>
			</div>
		</section>

		<div class="single-story-container container">
			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<?php endwhile; // End of the loop. ?>
		</div>

			<div class="bottom-toolbar-wrapper">
				<div class="bottom-toolbar">
					<div class="tools">
					 	<div class="comment-modal-button">
					 		<i class="fa fa-comments" aria-hidden="true"></i>
					 	</div>
						<div class="highlight-modal-button">
						    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</div>
						<div class ="download-modal-button">
							<i class="fa fa-book" aria-hidden="true"></i>
						</div>
					</div>

					<div class="next-story">
						<?php if ( get_next_post() ) { // check if theres previous post?>
							<p>Read the Next Story</p>
							<?php next_post_link('%link'); ?>
						<?php } else { ?>
							<p>Want more stories?</p>
							<a href="<?php esc_url( the_permalink(67) ); ?>">What is offered in the bix book</a>
						<?php }; ?>
					</div>
				</div>

		</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
