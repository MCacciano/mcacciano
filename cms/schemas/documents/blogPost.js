export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: '96'
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {
        type: 'author'
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'This ends up on summary pages, on Google, when people share all your things on social medias.'
    }
  ]
};
