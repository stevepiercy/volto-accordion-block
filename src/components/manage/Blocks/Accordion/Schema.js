const Schema = {
  title: 'Accordion block settings',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'placeholder',
        'instructions',
        'allowedBlocks',
        'as',
        'required',
        'fixed',
        'disableNewBlocks',
        'readOnly',
      ],
    },
  ],
  properties: {
    allowedBlocks: {
      title: 'Allowed blocks',
      description: 'Allow only the following blocks types',
      type: 'array',
      items: {
        choices: [],
      },
    },
    placeholder: {
      title: 'Helper text',
      description:
        'A short hint that describes the expected value within this block',
      type: 'string',
    },
    instructions: {
      title: 'Instructions',
      description: 'Detailed expected value within this block',
      type: 'string',
      widget: 'richtext',
    },
    as: {
      title: 'HTML5 element',
      description: 'Select HTML5 element to be used for this block',
      type: 'string',
      factory: 'Choice',
      default: 'div',
      choices: [
        ['div', 'div'],
        ['section', 'section'],
        ['article', 'article'],
        ['aside', 'aside'],
        ['details', 'details'],
      ],
    },
    required: {
      title: 'Required',
      description: "Don't allow deletion of this block",
      type: 'boolean',
    },
    fixed: {
      title: 'Fixed position',
      description: 'Disable drag & drop on this block',
      type: 'boolean',
    },
    disableNewBlocks: {
      title: 'Disable new blocks',
      description: 'Disable creation of new blocks after this block',
      type: 'boolean',
    },
    readOnly: {
      title: 'Read-only',
      description: 'Disable editing on this block',
      type: 'boolean',
    },
  },
  required: [],
};

export const AccordionSchema = {
  title: 'Accordion',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['panel_title'],
    },
  ],
  properties: {
    panel_title: {
      title: 'Accordion title',
    },
  },
  required: [],
};

export const accordionBlockSchema = () => ({
  title: 'Accordion block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['data', 'arrow_select'], //  'nrColumns', 'block_title'
    },
  ],
  properties: {
    block_title: {
      title: 'Block title',
      default: 'Panels',
    },
    data: {
      title: 'Accordion',
      type: 'panels',
      schema: AccordionSchema,
    },
    arrow_select: {
      title: 'Align arrow to right',
      type: 'boolean',
    },
  },
  required: ['title'],
});

export default Schema;