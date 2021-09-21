class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      # t.references :user, null: false, foreign_key: true
      t.references :user, index: true
      t.references :favoritable, polymorphic: true, index: true

      t.timestamps
    end
    add_index :favorites, :favoritable_id
    add_index :favorites, :favoritable_type
    # add_index :favorites, %i[favoritable_id favoritable_type], unique: true, name: 'allowed_one_favorite'
    add_index(:favorites, %i[user_id favoritable_type favoritable_id], unique: true,
                                                                       name: 'allowed_one_favorite')
  end
end
