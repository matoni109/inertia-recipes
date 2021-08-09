class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :description

      t.references :user
      t.timestamps
    end
  end
end
