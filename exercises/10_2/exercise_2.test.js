// **Código base para os exercícios 2 e 3:**

// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma *Promise*, que é utilizada pelo método `getUserName`.
const { getUserName } = require('./exercise_2.js')

describe('getUserName - promise', () => {
    describe('when the user id exists', () => {
      it('returns the user name', () => {
        expect.assertions(1);
        return getUserName(4).then(data => expect(data).toEqual('Mark'));
      });
    });
  
    describe('when the user id does not exists', () => {
      it('returns an error', () => {
        expect.assertions(1);
        return getUserName(2).catch(error =>
          expect(error).toEqual({ error: 'User with 2 not found.' })
        );
      });
    });
  });