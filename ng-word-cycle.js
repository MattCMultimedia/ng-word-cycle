angular.module('ngWordCycle')
.directive('ngWordCycle', function($interval) {
    return {
        restrict: 'AE',
        template: '{{word}}',
        scope: {
            words: '='
        },
        link: function(scope, el, attrs) {
            var m,
                i = 0;

            scope.$watch('words', function() {
                if (scope.words !== undefined) {
                    if (typeof scope.words === 'string') {
                        scope.words = scope.words.split(',');
                    } else {
                        m = scope.words.length;
                    }
                    i = 0;
                    scope.word = scope.words[i];
                }
            });

            $interval(function() {
                scope.word = scope.words[i++];
                if (i >= m) { i=0; }
            }, window.parseInt(attrs.interval, 10) || 3200);
        }
    };
});