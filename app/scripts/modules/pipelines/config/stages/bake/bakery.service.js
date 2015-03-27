'use strict';

angular.module('deckApp.pipelines.stage.bake')
  .factory('bakeryService', function($q) {

    function getRegions() {
      return $q.when(['us-east-1', 'us-west-1', 'us-west-2', 'eu-west-1']);
    }

    function getBaseOsOptions() {
      return $q.when(['trusty', 'ubuntu', 'centos']);
    }

    function getBaseLabelOptions() {
      return $q.when(['release', 'candidate', 'previous', 'unstable']);
    }

    function getVmTypes() {
      return $q.when(['pv', 'hvm']);
    }

    function getStoreTypes() {
      return $q.when(['ebs', 's3']);
    }

    return {
      getRegions: getRegions,
      getBaseOsOptions: getBaseOsOptions,
      getVmTypes: getVmTypes,
      getBaseLabelOptions: getBaseLabelOptions,
      getStoreTypes: getStoreTypes,
    };
  });
