describe('app', function () {
    'use strict';

    var answer = window.app;

    describe ('calculateArea', function () {
        it ('should should...', function () {
            expect (answer.calculateArea (2, 55, 3, 'Succes', 'Error')).toEqual ({
                area: 49,
                message: 'Succes'
            });
            expect (answer.calculateArea (27, 2, 1, 'Succes', 'Error')).toEqual ({
                area: 25,
                message: 'Succes'
            });
            expect (answer.calculateArea (21, 2, 0, 'Succes', 'Error')).toEqual ({
                area: 21,
                message: 'Succes'
            });

        });
        xit ('should return false if some of arguments are incorrect', function () {
            expect (answer.calculateArea ("aaa", 2, 1, "aa", "aaa")).toEqual (false);
            expect (answer.calculateArea (2, "aaa", 1, "aa", "asdf")).toEqual (false);
            expect (answer.calculateArea (2, 2, "aaa", "aaa", "aaa")).toEqual (false);
            expect (answer.calculateArea (2, 2, 2, 2, "aaa")).toEqual (false);
            expect (answer.calculateArea (2, 2, 2, "aaa", 2)).toEqual (false);

        });
        xit ('should return Big null if area equal 0', function () {
            expect (answer.calculateArea (0, 0, 0, "aaa", "aaa")).toEqual ({
                area: 0,
                message: 'Big null'
            });

        });
        xit ('should return message error if area is less than 0', function () {
            expect (answer.calculateArea (4, 1, 6, "aaa", "aaa")).toEqual ({area: -2, message: 'aaa'});
        });
        xit ('should return message error if area is equal 1', function () {
            expect (answer.calculateArea (5, 2, 2, "aaa", "aa")).toEqual ({area: 1, message: 'aaa'});
        });
    });
});