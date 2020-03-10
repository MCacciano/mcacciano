export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      rows: '5'
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
      name: 'overlay',
      title: 'Overlay Color',
      type: 'color'
    },
    {
      name: 'tech',
      title: 'Tech',
      description: 'Tech used to create project',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tech'
          }
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};
