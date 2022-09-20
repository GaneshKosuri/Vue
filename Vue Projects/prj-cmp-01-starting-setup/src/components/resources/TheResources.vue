<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResourceButtonMode"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="addResourceButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: uuidv4(),
          title: 'HTML',
          description: 'Official HTML W3 Documentation',
          link: 'https://www.w3schools.com/html/default.asp',
        },
        {
          id: uuidv4(),
          title: 'CSS',
          description: 'Official CSS W3 Documentation',
          link: 'https://www.w3schools.com/css/',
        },
      ],
    };
  },
  computed: {
    storedResourceButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: uuidv4(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      console.log('stored res', this.storedResources);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(
        (resource) => resource.id === resourceId
      );
      if (resourceIndex === -1) return;

      this.storedResources.splice(resourceIndex, 1);
    },
  },
};
</script>
