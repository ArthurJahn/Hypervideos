Hypervideo = Astro.Class({
  name: 'Hypervideo', // Name model.
  collection: Hypervideos, // Associate collection with the model.
  transform: true, // Auto transform objects fetched from collection.
  fields: {
    name: 'string', // Define "title" field of String type.
    subjectId: 'string', //Define subject that contains this hypervideo
    subvideos: 'array', // Define "subvideos" of Array type.
    connections: 'array',
    x: 'number',
    y: 'number'
  },
  methods: { // Define few methods.
    move: function(x,y) {
      this.x = x;
      this.y = y;
    }
  },
  behaviors: ['timestamp'] // Add "timestamp" behavior that adds "createdAt" and "updatedAt" fields.
});